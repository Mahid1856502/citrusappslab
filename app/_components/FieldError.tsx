export default function FieldError({ message }: { message: string }) {
  return (
    <div style={{ color: "red" }}>
      <p>{message || "System error. Please try again later!"}</p>
    </div>
  );
}
