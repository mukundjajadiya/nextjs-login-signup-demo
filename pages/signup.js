import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		setEmail("");
		setPassword("");
		setConfirmPassword("");
		setMessage("");
		setSubmitted(false);
	}, [submitted]);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const data = {
			email,
			password,
			confirmPassword,
			message,
		};

		if (password !== confirmPassword) {
			setMessage("Password and confirm password not  match.");
		} else {
			setMessage("");
			setSubmitted(true);
			alert("Form submitted successfully.");
			Router.push("/");
		}
		console.log(data);
	};

	return (
		<>
			<Head>
				<title>Signup Page</title>
			</Head>
			<form onSubmit={onSubmitHandler}>
				<div className="container col col-lg-6 col-md-8 col-sm-10">
					<div>
						<h1 className="my-5 text-center">Signup Form</h1>
					</div>
					<div className="mb-3 ">
						<label htmlhtmlhtmlFor="email" className="form-label">
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
						<label htmlhtmlhtmlFor="password" className="form-label">
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
					<div className="mb-3">
						<label htmlhtmlhtmlFor="confirm_password" className="form-label">
							Confirm Password
						</label>
						<input
							type="password"
							className="form-control"
							id="confirm_password"
							onChange={(e) => setConfirmPassword(e.target.value)}
							value={confirmPassword}
							required={true}
						/>
					</div>
					<div>
						<p className="validation_error_message">{message}</p>
					</div>
					<div>
						<p className="fs-6 text-muted">
							Already have account? <Link href="/login">Login</Link>
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

export default Signup;
