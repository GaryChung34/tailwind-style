import React, { useState } from 'react'

var myArray = ['A00001', 'A06666', 'A06571', 'A07104', 'A12345'];

function LuckyDraw() {
	const [ drawList, setDrawList ] = useState(myArray)
	const [ result, setResult ] = useState('A00000')
	const [ empty , setEmpty ] = useState(false)


	function draw() {
		let temp;

		if (drawList.length !== 0) {
			let x = Math.round((drawList.length - 1) * Math.random())

			temp = [...drawList]
			temp.splice(x, 1)

			setResult(drawList[x])
			setDrawList(temp)
		} else {
			setEmpty(true)
		}
	}

	function reset() {
		setDrawList(myArray)
		setEmpty(false)
	}

	return (
		<div className='bg-fixed h-screen' style={{backgroundImage: 'url(/img/celebrate.jpg)'}}>
			<div className='container mx-auto h-screen'>
				<div className='bg-gray-100 pb-3'>
					<h1 className='text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-red-500'>
						ATAL PD Annual Dinner Lucky Draw
					</h1>
				</div>
				<div className='my-3 bg-gradient-to-tl from-yellow-400 to-red-500 p-5 h-5/6'>
					<div className='bg-gray-100 p-5 h-full'>
						{empty && <h1 className='text-red-500'>This is the last person!</h1>}

						<div className='flex'>
							<div className='mx-auto'>
								<button className='py-5 px-10 bg-gray-200 shadow-md rounded-xl text-white text-4xl hover:bg-blue-400 my-24' onClick={reset}>
									Reset
								</button>
							</div>

							<div className='relative w-slot_w'>
								<div className='flex justify-center gap-5 absolute right-44 bottom-16'>
									<div className='bg-gray-50 text-8xl pt-1 text-center w-16 h-28 shadow-lg rounded-lg'>{result[0]}</div>
									<div className='bg-gray-50 text-8xl pt-1 text-center w-16 h-28 shadow-lg rounded-lg'>{result[1]}</div>
									<div className='bg-gray-50 text-8xl pt-1 text-center w-16 h-28 shadow-lg rounded-lg'>{result[2]}</div>
									<div className='bg-gray-50 text-8xl pt-1 text-center w-16 h-28 shadow-lg rounded-lg'>{result[3]}</div>
									<div className='bg-gray-50 text-8xl pt-1 text-center w-16 h-28 shadow-lg rounded-lg'>{result[4]}</div>
									<div className='bg-gray-50 text-8xl pt-1 text-center w-16 h-28 shadow-lg rounded-lg'>{result[5]}</div>
								</div>
								<img className='h-62 mx-auto' src='/img/slot_machine.png' />
							</div>

							<div className='mx-auto'>
								<button className='py-5 px-10 bg-red-500 shadow-md rounded-xl text-white text-4xl hover:bg-red-600 my-24'
									onClick={draw}>
									Draw
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LuckyDraw