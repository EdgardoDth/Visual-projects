class Perceptron {
    //n size of weightsights, c learning rate
    constructor(n, eta) {
        this.weights = new Array(n);
        this.eta = eta;

        for(let i = 0; i < n; i++)
            this.weights[i] = random(-1,1);
    }

    // Return weightseights
    getweights() {
        return this.weights;
    }

    activate(sum) {
        // sigmoid function
        return 1/(1 + exp(-sum));
    }

    p_activate(sum) {
        // derivative of sigmoid
        let logsig = this.activate(sum);
        return logsig * (1 - logsig);
    }

    dot(inputs) {
        // dot product
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++)
            sum += inputs[i] * this.weights[i];

        return this.activate(sum);
    }

    train(inputs, target) {
        let logsig = this.dot(inputs);
        let error = target - logsig;

        for(let i = 0; i < inputs.length; i++)
            this.weights[i] += this.eta * error * logsig * (1 - logsig) * inputs[i];
    }
}
