//la lista de clientes.
let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];
// podes continuar tu codigo a partir de aca!

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (titular) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta) {
                return this.clientes[i];
            }
        }
    },
    deposito: function (titular, cantidadDinero) {
        this.consultarCliente(titular).saldoEnPesos += cantidadDinero
        console.log(`Depósito realizado, su nuevo saldo es: ${this.consultarCliente(titular).saldoEnPesos}`);
    },
    extraccion: function (titular, montoAExtraer){
        if (this.consultarCliente(titular).saldoEnPesos > montoAExtraer) {
            this.consultarCliente(titular).saldoEnPesos -= montoAExtraer
            console.log(`Extracción realizada correctamente, su nuevo saldo es: ${this.consultarCliente(titular).saldoEnPesos}`);
        } else {
            console.log("Fondos insuficientes");
        }
    }
};

//console.log(banco.consultarCliente("Ansel Ardley"));
banco.deposito("Jacki Shurmer", 10000000);
banco.extraccion("Jacki Shurmer", 10000000);