
const { Given, When, Then } = require('cucumber');
const lib = require('./lib');
//// 你的步骤定义 /////

Given(/^初始值设为 (\d+)$/, async function (num) {
	lib.setTo(num);
});

When(/^现在再加 (\d+)$/, async function (num) {
	lib.incrementBy(num);
});

Then(/^结果为 (\d+)$/, async function (num) {
	if (lib.variable != parseInt(num)) {
		throw new Error('变量应该包含 ' + num +
			' 但是包含了 ' + lib.variable + '.');
	}
});
