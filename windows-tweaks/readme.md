# ����Դ��������ȥ���������ʾ��

	How Add or Remove Folders from This PC in Windows 10
	https://www.tenforums.com/tutorials/6015-add-remove-folders-pc-windows-10-a.html

	How to remove OneDrive from File Explorer on Windows 10
	https://www.windowscentral.com/how-remove-onedrive-file-explorer-windows-10

# ����Դ�������н�ֹ�� zip �ļ���ʾΪ�ļ���

	Disable Explorer Folder View of Cab and Zip Files
	https://www.sevenforums.com/tutorials/13619-zip-folders-enable-disable-windows-explorer-view.html

# ���� Windows 10 �������Զ���¼

	�������Win10�Զ���¼��
	https://www.zhihu.com/question/36628542

	���� control userpasswords2 ���� netplwiz.exe

# Windows 10 �����������λ��

���������������ļ�������ӿ�ݷ�ʽ��

	C:\Users\��ǰ�û���\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
	��������Դ��������ַ���������� shell:Startup �����ٴ򿪡�

	C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup
	��������Դ��������ַ���������� shell:Common Startup �����ٴ򿪡�

Ҳ��������������ע���λ����� REG_SZ �

	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
	HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Run

# cmd ���õ�����������

�� Window 8/10 ����������� cmd ������������ʱ���֡��������塱�޷�ѡ���ֺŵ����⣬�����޷���������Ϊ�������塣

	https://answers.microsoft.com/en-us/windows/forum/windows_7-desktop/cmdexe-raster-font-8x12-is-missing/3a205183-8c99-49e4-aac3-ef020177277e

	1. press WinKey+R
	2. type cmd and press enter
	3. type sfc /scannow and press enter (it will check for integrity errors in system files)
	4. after finishing restart your system
	5. ...
	6. run cmd as previously
	7. right click on the cmd window icon in left-top corner
	8. select Properties
	9. select Font tab
	10. choose Raster Font 8x12

# �� WebDAV ӳ��������и����ļ����������Ϊ 50M

	Folder copy error message when downloading a file that is larger than 50000000 bytes from a Web folder
	https://support.microsoft.com/en-us/help/900900/folder-copy-error-message-when-downloading-a-file-that-is-larger-than

	��ע��� HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters ���޸� FileSizeLimitInBytes ��ֵ���Ե������Ƶĳߴ硣
