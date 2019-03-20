var app = new Vue({
    el: '#app',
    data: {
        msgList: ['init']
    },

    methods: {
        handleClick: function (event) {
            // 获取id为otherPage的iframe窗口对象
            const iframeWin = document.getElementById('otherPage').contentWindow;

            // 向该窗口发送消息
            // iframeWin.postMessage('hello, world!', 'http://moweide.gitcafe.io');
            iframeWin.postMessage({
                envList: [
                    { value: 0, label: '测试环境1' },
                    { value: 1, label: '测试环境2' },
                    { value: 2, label: '测试环境x' }
                ]
            }, 'http://localhost:3000');
        }
    },
    created() {
        window.addEventListener('message', function (event) {
            // For Chrome, the origin property is in the event.originalEvent
            // object.
            // 这里不准确，chrome没有这个属性
            // var origin = event.origin || event.originalEvent.origin;
            var origin = event.origin;
            console.log('--origin--', origin);
            console.log('--event--', event);
        }, false);
    }
});