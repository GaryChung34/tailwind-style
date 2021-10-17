import React, { useState } from 'react'
import { employeeDetail } from '../data.js'

var myArray = ['A00101', 'A06866', 'A06571', 'A07104', 'A12345'];

function LuckyDraw() {
	const [ drawList, setDrawList ] = useState(myArray)
	const [ result, setResult ] = useState('A00000')
	const [ empty , setEmpty ] = useState(false)
	const [ prizeList, setPrizeList ] = useState([])
	const [ turn, setTurn ] = useState(0)
	const [ PDname, setPDname ] = useState('-')
	const [ PDid, setPDid] = useState('-')
	const [ PDsite, setPDsite ] = useState('-')
	const [ PDimg, setPDimg ] = useState('/img/hulk.jpg')


	console.log(employeeDetail)

	function draw() {
		let temp;
		let prizeListTemp
		let x;
		let luckyMan;

		if (drawList.length !== 0) {
			x = Math.round((drawList.length - 1) * Math.random())

			temp = [...drawList]
			temp.splice(x, 1)
			prizeListTemp = [...prizeList]
			prizeListTemp.push(drawList[x])

			luckyMan = employeeDetail.find(employee => employee.id === drawList[x])
			console.log(luckyMan)

			setPDname(luckyMan.name)
			setPDid(luckyMan.id)
			setPDsite(luckyMan.site)
			setPDimg(luckyMan.photo)

			setPrizeList(prizeListTemp)
			setResult(drawList[x])
			setDrawList(temp)
		} 
		else {
			setEmpty(true)
		}
	}

	function reset() {
		setDrawList(myArray)

		setPDname('-')
		setPDid('-')
		setPDsite('-')
		setPDimg('/img/hulk.jpg')
		setPrizeList([])

		setEmpty(false)
		setResult('A00000')
	}

	return (
		<div className='bg-fixed h-screen' style={{backgroundImage: 'url(/img/celebrate.jpg)'}}>
			<div className='container mx-auto h-screen'>

				{/* Title block */}
				<div className='bg-gray-100 pb-3'>
					<h1 className='text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-red-500'>
						ATAL PD Annual Dinner Lucky Draw
					</h1>
				</div>

				{/* gradient frame */}
				<div className='my-3 bg-gradient-to-tl from-yellow-400 to-red-500 p-5 h-5/6'>
					<div className='bg-gray-100 p-5 h-full drawingBox'>
						

						{/* photo and detail block */}
						<div className='flex photoBlock'>
							{/* photo of employee */}
							<div className='w-1/3 p-5 self-center'>
								<img src={PDimg} className='object-cover h-sideBox_h w-sideBox_w mx-auto rounded-lg shadow-lg self-center' />
							</div>
							
							{/* employee detail */}
							<div className='w-1/3 self-center pl-16'>
								<div className='py-5 text-4xl font-semibold'>得獎者: {PDname}</div>
								<div className='py-5 text-4xl font-semibold'>員工編號: {PDid}</div>
								<div className='py-5 text-4xl font-semibold'>所屬地盤: {PDsite}</div>
							</div>

							{/* drawing history */}
							<div className='w-1/3 p-5 self-center'>
								<div className='w-sideBox_w h-sideBox_h bg-yellow-100 border-4 border-yellow-700 rounded-lg shadow-lg p-3 mx-auto pl-20'>
									<div className='py-1 text-2xl font-semibold'>頭獎:&nbsp;&nbsp;&nbsp;&nbsp;{prizeList[4] ? prizeList[4] : '-'}</div>
									<div className='py-1 text-2xl font-semibold'>二獎:&nbsp;&nbsp;&nbsp;&nbsp;{prizeList[3] ? prizeList[3] : '-'}</div>
									<div className='py-1 text-2xl font-semibold'>三獎:&nbsp;&nbsp;&nbsp;&nbsp;{prizeList[2] ? prizeList[2] : '-'}</div>
									<div className='py-1 text-2xl font-semibold'>四獎:&nbsp;&nbsp;&nbsp;&nbsp;{prizeList[1] ? prizeList[1] : '-'}</div>
									<div className='py-1 text-2xl font-semibold'>五獎:&nbsp;&nbsp;&nbsp;&nbsp;{prizeList[0] ? prizeList[0] : '-'}</div>
									{/*	<div className='py-1 text-2xl font-semibold'>六獎:&nbsp;&nbsp;&nbsp;&nbsp;-</div>
									<div className='py-1 text-2xl font-semibold'>七獎:&nbsp;&nbsp;&nbsp;&nbsp;-</div>
									<div className='py-1 text-2xl font-semibold'>八獎:&nbsp;&nbsp;&nbsp;&nbsp;-</div>*/}
								</div>

							</div>
						</div>

						{/* slot machine and button block */}
						<div className='flex relative slotMachine'>
							{empty && <h2 className='text-red-500 absolute left-1/3 top-0'>This is the last person!</h2>}
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
								<img className='h-72 mx-auto' src='/img/slot_machine.png' />
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