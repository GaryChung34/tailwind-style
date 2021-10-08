import React from 'react';

function Page1() {
	return(
		<React.Fragment>
      {/*notice box*/}
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="/img/message.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <br />

      {/*card with button*/}
      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/billie.jpg" alt="Woman's Face" />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
              Erin Lindford
            </p>
            <p class="text-gray-500 font-medium">
              Product Engineer
            </p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
      </div>
      <br />    

      {/*button using abstract CSS*/}
      <div class="max-w-sm mx-auto">
        <button class="btn btn-green">
          Click me
        </button>
      </div>
      <div class="max-w-sm mx-auto">
        <h1>h1 Heading... ABC 123</h1>
        <h2>h2 Heading... ABC 123</h2>
        <h3>h3 Heading... ABC 123</h3>
      </div>
    </React.Fragment>
	)
}

export default Page1