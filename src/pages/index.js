import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<img
					height="160"
					src="https://uploads-ssl.webflow.com/62d2d7f7683aff77aa92f2d3/62d2e872a73d90fe1d8eca95_Uncorrupted%2BFlat%2BWhite.gif"
					alt="Coffee"
				/>
				<div className={styles.buttons}>
					<Link className="button button--primary button--lg" to="/docs/intro">
						Browse Recipes
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<HomepageHeader />
			{/* <main>
				<HomepageFeatures />
			</main> */}
		</Layout>
	);
}
