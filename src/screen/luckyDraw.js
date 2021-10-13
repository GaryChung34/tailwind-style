import React, { useState } from 'react'

var myArray = ['A00001', 'A06666', 'A06571', 'A07104', 'A12345'];

function LuckyDraw() {
	
	const [ result, setResult ] = useState('A00000')
	const [ empty , setEmpty ] = useState(false)

	function draw() {
		if (myArray.length !== 0) {
			let x = Math.round((myArray.length - 1)*Math.random())
			setResult(myArray[x])
			myArray.splice(x, 1)
			console.log(myArray)
		} else {
			setEmpty(true)
		}
	}

	return (
		<div className='bg-fixed h-screen' style={{backgroundImage: 'url(/img/celebrate.jpg)'}}>
			<div className='container mx-auto h-screen'>
				<div className='bg-gray-100 pb-3'>
					<h1 className='text-6xl text-center bg-clip-text text-transparent bg-gradient-to-tl from-yellow-400 to-red-500'>
						ATAL PD Annual Dinner Lucky Draw
					</h1>
				</div>
				<div className='my-3 bg-gradient-to-tl from-yellow-400 to-red-500 p-5 h-4/5'>
					<div className='bg-gray-100 p-5 h-full'>
						{empty && <h1 className='text-red-500'>This is the last person!</h1>}
						
						<div className='min-h-5'></div>
						<button className='py-5 px-10 bg-blue-500 shadow-xl rounded-xl text-white text-4xl mx-auto hover:bg-blue-700'
							onClick={draw}>
							Draw
						</button>
						<div className='flex justify-center gap-2 relative right-5 top-60'>
							<div className='bg-gray-50 text-8xl pt-1 text-center w-20 h-28 shadow-lg rounded-lg'>{result[0]}</div>
							<div className='bg-gray-50 text-8xl pt-1 text-center w-20 h-28 shadow-lg rounded-lg'>{result[1]}</div>
							<div className='bg-gray-50 text-8xl pt-1 text-center w-20 h-28 shadow-lg rounded-lg'>{result[2]}</div>
							<div className='bg-gray-50 text-8xl pt-1 text-center w-20 h-28 shadow-lg rounded-lg'>{result[3]}</div>
							<div className='bg-gray-50 text-8xl pt-1 text-center w-20 h-28 shadow-lg rounded-lg'>{result[4]}</div>
							<div className='bg-gray-50 text-8xl pt-1 text-center w-20 h-28 shadow-lg rounded-lg'>{result[5]}</div>
						</div>
						<img className='w-1/2 mx-auto' src='/img/slot_machine.png' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LuckyDraw