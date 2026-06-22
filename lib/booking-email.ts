export type BookingEnquiry = {
  name: string
  email: string
  phone: string
  ageGroup: string
  experienceLevel: string
  preferredLocation: string
  preferredDates: string
  numberOfRiders: string
  message: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function fallback(value: string) {
  const trimmed = value?.trim()
  return trimmed ? trimmed : "—"
}

/** Plain-text version of the enquiry email. */
export function renderBookingText(data: BookingEnquiry) {
  return [
    "New Snowboard Lesson Booking Enquiry",
    "",
    `Name: ${fallback(data.name)}`,
    `Email: ${fallback(data.email)}`,
    `Phone: ${fallback(data.phone)}`,
    `Age Group: ${fallback(data.ageGroup)}`,
    `Experience Level: ${fallback(data.experienceLevel)}`,
    `Preferred Location: ${fallback(data.preferredLocation)}`,
    `Preferred Dates: ${fallback(data.preferredDates)}`,
    `Number of Riders: ${fallback(data.numberOfRiders)}`,
    "",
    "Message:",
    fallback(data.message),
  ].join("\n")
}

/** Branded HTML version of the enquiry email. */
export function renderBookingHtml(data: BookingEnquiry) {
  const rows: Array<[string, string]> = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Age Group", data.ageGroup],
    ["Experience Level", data.experienceLevel],
    ["Preferred Location", data.preferredLocation],
    ["Preferred Dates", data.preferredDates],
    ["Number of Riders", data.numberOfRiders],
  ]

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;width:160px;vertical-align:top;">${escapeHtml(
            label,
          )}</td>
          <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;font-weight:600;">${escapeHtml(
            fallback(value),
          )}</td>
        </tr>`,
    )
    .join("")

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;padding:24px;">
      <div style="background-color:#0f172a;border-radius:16px 16px 0 0;padding:24px 28px;">
        <p style="margin:0;color:#93c5fd;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">SnowboardHype</p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:800;">New Snowboard Lesson Booking Enquiry</h1>
      </div>
      <div style="background-color:#ffffff;border-radius:0 0 16px 16px;padding:8px 28px 24px;">
        <table style="width:100%;border-collapse:collapse;">
          ${tableRows}
        </table>
        <div style="margin-top:20px;">
          <p style="margin:0 0 6px;color:#6b7280;font-size:13px;">Message / Questions</p>
          <p style="margin:0;color:#111827;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(
            fallback(data.message),
          )}</p>
        </div>
      </div>
    </div>
  </body>
</html>`
}
