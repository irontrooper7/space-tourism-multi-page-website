import Head from "next/head";
import Header from "./Header";

export default function Layout({ title,description, children }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main>
				<Header />
				{children}
			</main>
		</>
	)
}