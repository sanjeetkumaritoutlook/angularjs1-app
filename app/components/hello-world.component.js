app.component('helloWorld', {
    template: `<h1>{{ $ctrl.message }}</h1>`,
    controller: function() {
        this.message = 'Hello from Component!';
    }
});
