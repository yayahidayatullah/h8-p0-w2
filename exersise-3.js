var nama  = prompt('Isikan Nama Anda'),
	peran = prompt("Silahkan Pilih Peran ('Ksatria','Tabib','Penyihir')");
if (nama !== '' && peran == 'Ksatria') {
	alert('"Selamat datang di Dunia Proxytia, ' + nama +'"\n"Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!"');
}else if (nama !== '' && peran == 'Tabib') {
	alert('"Selamat datang di Dunia Proxytia, ' + nama +'"\n"Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka."');
}else if (nama !== '' && peran == 'Penyihir') {
	alert('"Selamat datang di Dunia Proxytia, ' + nama +'"\n"Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!"')
}else if (nama !== '' && peran == '') {
	alert('"Halo ' + nama + ', Pilih peranmu untuk memulai game!"');
}else{
	alert('"Nama harus diisi!"');
}

