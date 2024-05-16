class streamdecklabels
{
	handleOSC(message, webmixer)
	{

		webmixer.broadcast(
			{
				address: "/location/" + FOH_CHANNELS[nameChangeMatch[1]] + "/style/text",
				args: [
					message.args[0] + " Autotune"
				]
			},
			{
				// target: STREAMDECK_IP
			}
		);

		webmixer.send
	}
}

module.exports = streamdecklabels;