import Link from "next/link";
import LinkColourer from "../components/linkColourer";

export default function NotFound() {
  return (
    <center>
      <LinkColourer />
      <h1>Not found – 404!</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </center>
  );
}
