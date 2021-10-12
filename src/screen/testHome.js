import React from 'react';
import NaviBar from './naviBar.js'

function TestHome() {
	return(
		<div className='bg-gradient-to-tl from-teal-400 to-blue-500 min-h-screen'>
			<div className='bg-blackT h-8 text-white text-center justify-center pt-0.5'>
				W e l c o m e &nbsp; t o &nbsp; S o o a p !
			</div>
			<NaviBar />
			<img src='/img/fight_club_soap.png' alt='fight_club_soap.png' 
				className='w-1/5 float-left relative bottom-28'/>
			<div className='container mx-auto'>
			</div>
		</div>
	)
}

export default TestHome