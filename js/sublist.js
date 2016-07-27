/*
����Ŀ��

����һ���������飬ϣ���������ҵ��������ص������������У�ʹ����Ե�Ԫ�غ͵Ĳ�ֵ���

��ʾ����

���� [2, -1, -2, 1, -4, 2, 8]������Ҫ�������������Ϊ [-1, -2, 1, -4] �� [2, 8]����ֵΪ 16

������˼·��

���Ƚ��һ���������⣺����һ���������飬ϣ���������ҵ�һ�������������У���Ԫ�غ�Ϊ������������ getMaxList() ��������������

�ڴ˻����Ͽ��ǣ�N ������ N-1 ���գ�ÿ���ն������ N �����ָ��ɶ��������š�

�Ѹ�������ָ������������飬�ֱ��ҵ������С�������У������ֵ���������зָ���ʽ���Ƚ�ÿ�ַ�ʽ�Ĳ�ֵ���ҵ����
*/

// �� arr ����� [from, to] ������ҡ����������С�
// sign = 1 ʱ���Ϊ������������С�
// sign = -1 ʱ���Ϊ������С�����С�
function getMaxList(arr, from, to, sign)
{
	var maxList = {
		begin: from,
		end: from,
		sum: arr[from] * sign
	};
	var curList = {
		begin: from,
		end: from,
		sum: arr[from] * sign
	};
	for (var i = from + 1; i <= to; i++) {
		if (curList.sum <= 0) {
			curList.begin = i
			curList.end = i
			curList.sum = arr[i] * sign;
		} else {
			curList.end = i
			curList.sum += arr[i] * sign;
		}
		if (maxList.sum < curList.sum) {
			maxList.begin = curList.begin;
			maxList.end = curList.end;
			maxList.sum = curList.sum;
		}
	}
	maxList.sum *= sign;
	return maxList;
}

var a = [2, -1, -2, 1, -4, 2, 8];
var maxDiff = 0;
var maxLeft, maxRight;
for (var i = 1; i <= a.length - 1; i++) {
	var left = getMaxList(a, 0, i - 1, -1);
	var right = getMaxList(a, i, a.length - 1, 1);
	var diff = Math.abs(left.sum - right.sum);
	if (maxDiff < diff) {
		maxDiff = diff;
		maxLeft = left;
		maxRight = right;
	}

	left = getMaxList(a, 0, i - 1, 1);
	right = getMaxList(a, i, a.length - 1, -1);
	diff = Math.abs(left.sum - right.sum);
	if (maxDiff < diff) {
		maxDiff = diff;
		maxLeft = left;
		maxRight = right;
	}
}
console.log(maxDiff, maxLeft, maxRight);
