import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		setEmail("");
		setPassword("");
		setSubmitted(false);
	}, [submitted]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const data = {
			email,
			password,
		};
		console.log(data);
		alert("Form submited successfully.");
		setSubmitted(true);
		Router.push("/");
	};

	return (
		<>
			<Head>
				<title>Login Page</title>
			</Head>
			<form onSubmit={onSubmitHandler}>
				<div className="container col col-lg-6 col-md-8 col-sm-10">
					<div>
						<h1 className="my-5 text-center">Login Form</h1>
					</div>
					<div className="mb-3 ">
						<label htmlFor="email" className="form-label">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required={true}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required={true}
						/>
					</div>
					<div>
						<p className="fs-6 text-muted">
							Don't have account?
							<span className="login_link_style px-2">
								<Link href="/signup" className="login_link_style">
									Create Account.
								</Link>
							</span>
						</p>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default Login;
