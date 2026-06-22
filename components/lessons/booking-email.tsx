import type { BookingPayload } from "@/lib/booking-schema"

const rowStyle: React.CSSProperties = {
  padding: "8px 0",
  borderBottom: "1px solid #e5e7eb",
}

const labelStyle: React.CSSProperties = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "#6b7280",
  margin: "0 0 2px",
}

const valueStyle: React.CSSProperties = {
  fontSize: "15px",
  color: "#111827",
  margin: 0,
  fontWeight: 600,
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td style={rowStyle}>
        <p style={labelStyle}>{label}</p>
        <p style={valueStyle}>{value || "—"}</p>
      </td>
    </tr>
  )
}

export function BookingEmail({ data }: { data: BookingPayload }) {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#f3f4f6",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ backgroundColor: "#0f172a", padding: "24px" }}>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "20px",
              margin: 0,
            }}
          >
            New Snowboard Lesson Booking Enquiry
          </h1>
        </div>
        <div style={{ padding: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <Row label="Name" value={data.name} />
              <Row label="Email" value={data.email} />
              <Row label="Phone" value={data.phone} />
              <Row label="Age Group" value={data.ageGroup} />
              <Row label="Experience Level" value={data.experienceLevel} />
              <Row label="Preferred Location" value={data.preferredLocation} />
              <Row label="Preferred Dates" value={data.preferredDates} />
              <Row label="Number of Riders" value={data.numberOfRiders} />
            </tbody>
          </table>
          <div style={{ marginTop: "20px" }}>
            <p style={labelStyle}>Message</p>
            <p
              style={{
                fontSize: "15px",
                color: "#111827",
                lineHeight: 1.6,
                whiteSpace: "pre-wrap",
                margin: "4px 0 0",
              }}
            >
              {data.message || "—"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
