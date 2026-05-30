# Widerruf-Worker (Cloudflare)

Versendet die E-Mails für den Widerrufsbutton von antik70.de:

1. **Benachrichtigung** an den Betreiber (`OWNER_EMAIL`)
2. **Eingangsbestätigung** an den Kunden (mit Datum/Uhrzeit – gesetzlich vorgeschrieben)

Das Frontend (statische Seite) postet das Formular per `fetch` an diesen Worker.
Die Worker-URL wird im Frontend über die Umgebungsvariable
`PUBLIC_WIDERRUF_ENDPOINT` gesetzt. Solange diese leer ist, greift im Frontend
ein `mailto:`-Fallback.

## Setup

```bash
cd cloudflare/widerruf-worker
npm install -g wrangler        # falls noch nicht vorhanden
wrangler login

# Absender/Empfänger in wrangler.toml prüfen, dann Secrets setzen:
wrangler secret put RESEND_API_KEY     # API-Key des E-Mail-Dienstes
wrangler secret put TURNSTILE_SECRET   # Turnstile-Secret (Bot-Schutz, Pflicht)
wrangler deploy
```

## Missbrauchsschutz (wichtig!)

Ohne Schutz wäre der Endpoint ein **offenes Mail-Relay**: Jeder direkte POST mit
`name`, `email`, `orderNumber` würde Antik70-gebrandete E-Mails an beliebige
Empfänger auslösen (Spam, Reputations- und Kostenschaden). CORS verhindert das
**nicht** – es schützt nur Browser-Reads, keine direkten Requests.

Der Worker setzt daher drei Schichten ein:

1. **Origin-Prüfung** gegen `ALLOWED_ORIGIN`.
2. **Rate-Limit pro IP** über das `RATE_LIMITER`-Binding (Standard: 5/60 s, in
   `wrangler.toml` anpassbar; entfernen deaktiviert es).
3. **Cloudflare Turnstile** – *fail-closed*: Ohne `TURNSTILE_SECRET` oder ohne
   gültiges Token wird **kein** Versand ausgelöst.

### Turnstile einrichten

1. Im Cloudflare-Dashboard unter **Turnstile** ein Widget für `antik70.de`
   anlegen → liefert **Sitekey** (öffentlich) und **Secret** (geheim).
2. Secret im Worker hinterlegen: `wrangler secret put TURNSTILE_SECRET`.
3. Sitekey im Frontend-Build als `PUBLIC_TURNSTILE_SITEKEY` setzen. Das
   `/widerruf`-Formular blendet das Widget dann im Bestätigungsschritt ein und
   sendet das Token mit. (Ohne Sitekey läuft das Frontend nur im
   `mailto:`-Fallback bzw. der Worker lehnt fail-closed ab.)

> Zusätzlich empfiehlt sich eine **WAF-Rate-Limiting-Regel** im Dashboard direkt
> auf der Worker-Route als zweite Verteidigungslinie.

Nach dem Deploy gibt Wrangler eine URL aus (z. B.
`https://antik70-widerruf.<account>.workers.dev`). Diese als
`PUBLIC_WIDERRUF_ENDPOINT` im Hosting/Build des Frontends hinterlegen.

## E-Mail-Versand

Das Beispiel nutzt [Resend](https://resend.com) (einfache HTTP-API). Dafür muss
die Domain `antik70.de` einmalig bei Resend verifiziert werden (SPF/DKIM).
Alternative Dienste mit HTTP-API funktionieren analog – nur `sendEmail()`
in `src/index.js` anpassen.

### Alternative: Cloudflare Email Routing

Cloudflares native `send_email`-Bindung kann **nur an verifizierte Adressen**
senden. Sie eignet sich daher gut für die **Betreiber-Benachrichtigung**
(`info@antik70.de`), nicht aber für die Eingangsbestätigung an beliebige Kunden.
Für die Kundenbestätigung wird ein externer Versanddienst benötigt.

## Sicherheit / Hinweise

- `ALLOWED_ORIGIN` auf die echte Domain setzen (CORS + Origin-Prüfung).
- `TURNSTILE_SECRET` und Rate-Limit aktiv lassen (siehe „Missbrauchsschutz“).
- Personenbezogene Daten datensparsam behandeln (DSGVO).
