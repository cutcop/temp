/*
	ʹ�÷�����

	�� Chrome ������д� DevTools �� console����������Ĵ��룬������������ָ�����ļ���
*/

var names = [];
for (var i=1; i <= 96; i++) names.push(i);
function dl() {
	var idx = names.shift();
	if (!idx) {
		console.log('finished.');
		return;
	}
	console.log('downloading', idx, '...');

	//window.location = 'http://down010701.tingclass.net/lesson/shi0529/0000/44/' + idx + '.mp3';
	var a = document.createElement('a');
	a.href = 'http://down010701.tingclass.net/lesson/shi0529/0000/44/' + idx + '.mp3';
	a.download = 'download';
	a.click();

	a = document.createElement('a');
	a.href = 'http://down010701.tingclass.net/lesson/shi0529/0000/44/' + idx + '.lrc';
	a.download = 'download';
	a.click();

	setTimeout(dl, 1000);
}

dl();
