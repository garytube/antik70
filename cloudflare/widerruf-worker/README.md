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

# Absender/Empfänger in wrangler.toml prüfen, dann:
wrangler secret put RESEND_API_KEY   # API-Key des E-Mail-Dienstes eingeben
wrangler deploy
```

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

- `ALLOWED_ORIGIN` auf die echte Domain setzen (CORS).
- Ggf. ein Rate-Limit / Turnstile vor den Worker schalten (Spam-Schutz).
- Personenbezogene Daten datensparsam behandeln (DSGVO).
