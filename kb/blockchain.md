# �ο�����

- �̳�

	��η������Լ��� ICO��
	https://mp.weixin.qq.com/s/xH6lRj2ZX_fSiRDTjlmPuw

	Truffle
	http://truffleframework.com

	Ganache
	http://truffleframework.com/ganache

	ETHEREUM PET SHOP
	http://truffleframework.com/tutorials/pet-shop

	A Guide to Ropsten Testnet Setup
	https://medium.com/@crissimrobert/a-guide-to-ropsten-testnet-setup-f8952d615417

	10������ɰ����ƻ������̫��˽����
	https://zhuanlan.zhihu.com/p/32911405

- �ֲ�

	web3 JavaScript library
	https://github.com/ethereum/web3.js/
	https://github.com/ethereum/wiki/wiki/JavaScript-API

	Solidity
	http://solidity.readthedocs.io/en/latest/index.html

- ����ԭ��֪ʶ

	Ethereum Wiki
	https://github.com/ethereum/go-ethereum/wiki

	Ethereum and Oracles
	https://blog.ethereum.org/2014/07/22/ethereum-and-oracles/

	Oracleϵ��һ����
	https://medium.com/taipei-ethereum-meetup/oracle%E7%B3%BB%E5%88%97%E4%B8%80-human-oracle-cb7ed8268030
	https://medium.com/taipei-ethereum-meetup/oracle%E7%B3%BB%E5%88%97%E4%BA%8C-my-oracle-d86ea6971431

	EOS.IO ������Ƥ��
	https://github.com/EOSIO/Documentation/blob/master/zh-CN/TechnicalWhitePaper.md

- ʵ�ٹ���

	�� Ropsten �������������� Ether
	http://faucet.ropsten.be:3001/

	�� Etherscan �鿴�˻���Ϣ
	https://ropsten.etherscan.io/address/0x640243b03ea3bd384b30823f91460735ba1ccd49
	https://ropsten.etherscan.io/address/0x04bf942d727c9729df4490fd9e9da0cdb49e84b5

	��ȡ block hash ��Ϊ�����
	https://github.com/fivedogit/solidity-baby-steps/blob/master/contracts/35_coin_flipper.sol


# Linux �Ϲ��� geth

	Centos 6.5����Git�汾��Git2.7.2
	https://www.jianshu.com/p/371fe20db80c

	yum install go

	git clone https://github.com/ethereum/go-ethereum.git
	cd go-ethereum
	git checkout tags/v1.8.1
	make geth
	mv build /mnt/bin/geth


# Ropsten testnet

	https://github.com/ethereum/ropsten
	
	/mnt/bin/geth/bin/geth --datadir /mnt/ethereum/testnet --testnet removedb
	/mnt/bin/geth/bin/geth --datadir /mnt/ethereum/testnet --testnet --cache 512
	"%APPDATA%\Ethereum Wallet\binaries\Geth\unpacked\geth.exe" --testnet --cache 512

	/mnt/bin/geth/bin/geth --datadir /mnt/ethereum/testnet attach
	"%APPDATA%\Ethereum Wallet\binaries\Geth\unpacked\geth.exe" attach ipc:\\.\pipe\geth.ipc
	> eth.syncing
	> eth.blockNumber
	> eth.getBlock('latest').number
	> admin.nodeInfo
	> admin.peers
	> net.peerCount
	> net.listening

	du --max-depth=1 -h ~/.ethereum/
	df -ah


# ����Ӧ��

	peerplays
	https://www.peerplays.com/

	Peerplays������������������ڲ�����ҵ��May 09, 2017, 06:37:53 AM
	https://bitcointalk.org/index.php?topic=1908400.0

	Peerplays��������������γ�Ϊ��ʵ��April 21, 2017, 03:46:11 AM
	https://bitcointalk.org/index.php?topic=1879657.0

	ultraplay
	http://ultraplay.co/

	HeroChain
	https://www.feixiaohao.com/coindetails/herochain/
