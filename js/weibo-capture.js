/*
	ʹ�÷�����

	��������΢��ĳ��������΢���б�ҳ�棬������Ĵ��븴��ճ���� console �����С�
	���ҳ�����Ͻǵġ�ץ����ť������ȡ��ǰҳ���е�΢�����ݡ�
	��������桱��ť���԰��Ѿ���ȡ�������ݱ��浽�ļ���
	������Զ����¹���ֱ���б���ʾ��������ȡ�굱ǰҳ����Զ�������һҳ��
*/
(function() {

function saveToFile(str, filename, mime)
{
	var blob = new window.Blob([str], {type: mime});
	var url = window.URL.createObjectURL(blob)
	var a = document.createElement('a');
	a.href = url;
	a.setAttribute('download', filename);
	a.innerHTML = 'saving...';
	document.body.appendChild(a);
	setTimeout(function() {
		a.click();
		document.body.removeChild(a);
		setTimeout(function() {
			self.URL.revokeObjectURL(a.href);
		}, 250);
	}, 66);
}

function extractWeiboText(div)
{
	var text = '';
	var node = div.firstChild;
	while (node) {
		if (node.nodeName == '#text') {
			text += node.textContent.trim();
		} else if (node.nodeName == 'A') {
			if (node.title) {
				text += '[' + node.title + ']';
			} else {
				text += node.innerText;
			}
		} else if (node.nodeName == 'IMG') {
			text += node.title;
		} else {
			text += node.innerText;
		}
		node = node.nextSibling;
	}
	return text.trim();
}

var results = [];

function capture()
{
	var details = document.getElementsByClassName('WB_detail');
	for (var i=0; i < details.length; i++) {
		var detail = details[i];
		var time = '-';
		var client = '-';
		var text = '-';
		var refer = null;
		
		for (var j=0; j < detail.children.length; j++) {
			var div = detail.children[j];

			if (div.className == 'WB_text W_f14') {
				text = extractWeiboText(div);
			}

			if (div.className == 'WB_feed_expand') {
				var expand = div.getElementsByClassName('WB_expand')[0];
				var info = expand.getElementsByClassName('WB_info')[0];
				if (info) {
					refer = info.firstElementChild.innerText.trim();
					refer += '\t|\t' + extractWeiboText(expand.getElementsByClassName('WB_text')[0]);
				} else {
					refer = '-\t|\t' + expand.innerText.trim();
				}
			}

			if (div.className == 'WB_from S_txt2') {
				var infos = div.getElementsByTagName('A');
				time = infos[0].innerText.trim();
				client = infos[1].innerText.trim();
			}
		}

		var result = time + '\t|\t' + client + '\t|\t' + text;
		if (refer) {
			result += '\t->\t' + refer;
		} else {
			result += '\t ';
		}
		results.push(result);
	}
	btnSave.innerHTML = '��(' + results.length + ')';

	var btnNext = document.getElementsByClassName('page next')[0]
	if (btnNext) {
		btnNext.click();
	} else {
		alert('finished.');
	}
}

function clear()
{
	results = [];
	btnSave.innerHTML = '��(0)';
}

function save()
{
	saveToFile(results.join('\r\n'), 'weibo-capture.txt', 'text/plain');
}

var divBoard = document.createElement('div');
divBoard.style.position = 'fixed';
divBoard.style.zIndex = 10000;
divBoard.style.left = '0px';
divBoard.style.top = '0px';
divBoard.style.border = '5px solid #B3D9F0';
divBoard.style.padding = '5px';
divBoard.style.backgroundColor = 'yellow';
document.body.appendChild(divBoard);

var btnCapture = document.createElement('button');
divBoard.appendChild(btnCapture);
btnCapture.innerHTML = 'ץ';
btnCapture.style.cursor = 'pointer';
btnCapture.addEventListener('click', capture);

var btnClear = document.createElement('button');
divBoard.appendChild(btnClear);
btnClear.innerHTML = '��';
btnClear.style.cursor = 'pointer';
btnClear.addEventListener('click', clear);

var btnSave = document.createElement('button');
divBoard.appendChild(btnSave);
btnSave.innerHTML = '��(0)';
btnSave.style.cursor = 'pointer';
btnSave.addEventListener('click', save);

setInterval(function() {
	window.scrollTo(0, 100000);
}, 500);

})();
