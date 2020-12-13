import React, { useState } from 'react';
import './styles.css';
import { designData } from './data';

let dData = Object.keys(designData);

export default function App() {
	var [selectedCategory, setCategory] = useState('All');

	function getCategory(category) {
		setCategory(category);
	}

	return (
		<div className="App">
			<div className="nav">
				<h1>Natraj Art Store Mock Web Store</h1>
				<h2 className="nav-H2">
					<small>
						-Created by{' '}
						<a href="https://nirav-kyada.netlify.app/" title="Visit My Site.">
							Nirav Kyada
						</a>
					</small>
				</h2>
				<p>
					Hey guys!! this is my Mark9 submission for neoGcamp #Level_Zero. This is the mock web design have
					created, hope it will be loved ;) During this i have discovered via trial and error .. a dynamic
					kinda mechanism using google sheets data as dynamic entries to All of NeoGrammers and their
					portfolio. Please feel free and give it a try.{' '}
					<a className="store-link" href="https://dynamic-list-nirav.netlify.app/">
						Link Here
					</a>
				</p>
			</div>

			<div className="btn_category">
				{dData.map((category) => {
					return (
						<button key={category} onClick={() => getCategory(category)}>
							{category}
						</button>
					);
				})}
				<hr />
			</div>

			{designData[selectedCategory].map((x) => {
				return (
					<div className="frame">
						<div className="frame-image">
							<img className="image" src={x.image} alt="frame"></img>
						</div>

						<div className="frame-info">
							<div className="design-name">
								<h2>{x.dName}</h2>
							</div>
							<div className="desing-category">
								<h4>Category: {x.subCat}</h4>
							</div>
							<div className="desing-link">
								<a className="store-link" href={x.storeLink}>
									Store Link
								</a>
							</div>
							<br />
						</div>
					</div>
				);
			})}
		</div>
	);
}
