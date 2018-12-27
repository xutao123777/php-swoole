<script type="text/javascript">
socket = new WebSocket('ws://192.168.1.107:9501/'); 
socket.onopen = function(evt) { 
    // 发送一个初始化消息
    socket.send('I am the client and I\'m listening!'); 
}; 

// 监听消息
socket.onmessage = function(event) { 
    console.log('Client received a message', event); 
}; 

// 监听Socket的关闭
socket.onclose = function(event) { 
    console.log('Client notified socket has closed',event); 
}; 

socket.onerror = function(evt) { 
    console.log('Client onerror',event); 
}; 

</script>
