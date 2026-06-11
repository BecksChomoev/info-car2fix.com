// Renders one or more JSON-LD objects as <script type="application/ld+json"> tags.
export default function JsonLd({ data }) {
  return (Array.isArray(data) ? data : [data]).map((ld, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  ))
}
