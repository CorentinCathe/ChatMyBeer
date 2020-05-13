Vue.component('messages', {
    props: ["message"],
    template: ` <p>
                    <strong>{{message.user}}</strong> : <span>{{message.text}}</span>
                </p>`
})