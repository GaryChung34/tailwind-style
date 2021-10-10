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
		<div className='bg-blue-100 min-h-screen'>
			<div className='container mx-auto'>
				<div className='h-1/2 mx-auto'>
					<h1 className='text-6xl'>Lucky Draw</h1>
					<br/>
					{empty && <h1 className='text-red-500'>This is the last person!</h1>}
					<div className='flex justify-center gap-4'>
						<div className='bg-gray-50 text-9xl pt-10 text-center w-40 h-60 shadow-xl rounded-xl'>{result[0]}</div>
						<div className='bg-gray-50 text-9xl pt-10 text-center w-40 h-60 shadow-xl rounded-xl'>{result[1]}</div>
						<div className='bg-gray-50 text-9xl pt-10 text-center w-40 h-60 shadow-xl rounded-xl'>{result[2]}</div>
						<div className='bg-gray-50 text-9xl pt-10 text-center w-40 h-60 shadow-xl rounded-xl'>{result[3]}</div>
						<div className='bg-gray-50 text-9xl pt-10 text-center w-40 h-60 shadow-xl rounded-xl'>{result[4]}</div>
						<div className='bg-gray-50 text-9xl pt-10 text-center w-40 h-60 shadow-xl rounded-xl'>{result[5]}</div>
					</div>
					<br/>
					<div className='min-h-5'></div>
					<button className='py-5 px-10 bg-blue-500 shadow-xl rounded-xl text-white text-4xl mx-auto hover:bg-blue-700'
						onClick={draw}>
						Draw
					</button>
				</div>
			</div>
		</div>
	)
}

export default LuckyDraw