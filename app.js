const model = {
    incrValue: value => value + 1,
    resetValue: () => 0,
    decrValue: value => value - 1,
    checkValueColor: value => value > 0 ? 'number-positive' : value < 0 ? 'number-negative' : 'number-neutral'
}

const view = {
    btnIncr: document.getElementById('btn-incr'),
    btnReset: document.getElementById('btn-reset'),
    btnDecr: document.getElementById('btn-decr'),
    counter: document.getElementById('counter'),

    setCounterValue: value => counter.textContent = value,
    getCounterValue: () => parseInt(counter.textContent),
    changeCounterColor: color => counter.className = color
}

const controller = {
    setEventListeners: () => {
        view.btnIncr.addEventListener('click', controller.incrCounterValue);
        view.btnReset.addEventListener('click', controller.resetCounterValue);
        view.btnDecr.addEventListener('click', controller.decrCounterValue);
    },
    changeCounterValue: valueFunction => {
        view.setCounterValue(valueFunction(view.getCounterValue()))
        view.changeCounterColor(model.checkValueColor(view.getCounterValue()))
    },
    incrCounterValue: () => controller.changeCounterValue(model.incrValue),
    resetCounterValue: () => controller.changeCounterValue(model.resetValue),
    decrCounterValue: () => controller.changeCounterValue(model.decrValue)
}

controller.setEventListeners()
