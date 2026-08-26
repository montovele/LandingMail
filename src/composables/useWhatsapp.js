// =======================================================
// useWhatsapp.js
// HENCOM
// =======================================================

const DEFAULT_PHONE = "526643313817"

/**
 * Detecta si el usuario está en un dispositivo móvil.
 */
function isMobile() {

    return /Android|iPhone|iPad|iPod|Windows Phone/i.test(
        navigator.userAgent
    )

}

/**
 * Genera la URL de WhatsApp.
 */
function buildWhatsappUrl(phone, message = "") {

    const number = String(phone).replace(/\D/g, "")

    const text = encodeURIComponent(message)

    return isMobile()
        ? `https://wa.me/${number}?text=${text}`
        : `https://web.whatsapp.com/send?phone=${number}&text=${text}`

}

/**
 * Abre WhatsApp.
 */
function openWhatsapp({

    phone = DEFAULT_PHONE,

    title = "HENCOM",

    message = ""

} = {}) {

    const finalMessage = message || `
Hola ${title}.

Me gustaría recibir información acerca de sus servicios.

Quedo atento.

Muchas gracias.
`.trim()

    const url = buildWhatsappUrl(phone, finalMessage)

    window.open(url, "_blank", "noopener,noreferrer")

}

/**
 * Genera un mensaje de cotización.
 */
function quoteMessage(data = {}) {

    const contactDetails = [
        data.email ? `Correo electrónico: ${data.email}` : "",
        data.phone ? `Teléfono: ${data.phone}` : ""
    ].filter(Boolean).join("\n")

    return `
Hola HENCOM.

Me gustaría recibir información acerca de sus servicios.

${contactDetails}

Muchas gracias.
`.trim()

}

export function useWhatsapp() {

    return {

        openWhatsapp,

        buildWhatsappUrl,

        quoteMessage

    }

}