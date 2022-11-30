/**
   * Create By THE JO BOT
   * Base by Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}


global.ownername = 'FALZ MODDER'
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
// Other
global.owner = ['6289518022967','6285717086526','6285817650130','6282139238563','6281275486004','6289602070945','6282290687407','6285795609322','6285789405897','6282136111649','6289521749274','62856004745242','6283112695013','6285893864904','62856004745242','6285863367803','6285363360182','6283841066532','6285704846056','6283133818019','6281347833107','6285711869076','62885693722578','6281278010033','6285697088459','6285741752959','6282123995694','6283801580904','6281368053743','6285848377763','6287815479453','6285624067449','6285692822190','6285961467767','6283801580904','62895386897298','6288224931589','6285768986240','6283116049974','6281256519498','628994772090','6285848377763','6281271749972','6285664839702','6281256519498','6281256519498','6285739679186','6285811655605','6285782566705','6285877157045','6285664839702','6282133674189','6287732547294','6282114823092','6282180697141','6281267928619','6285767757393','62882002963550','62823246214880','6281333755505','6281375418835','6282214159055','6281381097109','6285814223823','6289521749274','6288296561047','6285737010384','62895418001335','6281219019530','6285727027774','6282180625481']
global.premium = ['6289518022967']
global.packname = 'FALZ MODDER'
global.author = 'WhatsApp Bot'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
