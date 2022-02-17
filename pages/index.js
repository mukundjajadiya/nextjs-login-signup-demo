/** @format */

import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>

			<h1 className="text-center my-5">Hello from mukund</h1>
			<div className="my-3 d-flex align-center justify-content-center">
				<button className="btn btn-primary home_link_style">
					<Link href="/login">login</Link>
				</button>
			</div>
			<div className="my-3 d-flex align-center justify-content-center">
				<button className="btn btn-primary home_link_style">
					<Link href="/signup">signup</Link>
				</button>
			</div>
		</div>
	);
}
