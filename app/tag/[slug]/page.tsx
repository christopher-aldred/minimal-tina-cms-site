import Link from "next/link";
import LinkColourer from "../../../components/linkColourer";

export default function NotFound() {
  return (
    <center className="m-32">
      <LinkColourer />
      <h1>Coming soon!</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </center>
  );
}
