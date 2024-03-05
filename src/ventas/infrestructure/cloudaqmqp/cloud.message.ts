import * as amqp from 'amqplib';

export async function publicMessage(name: string, message: any, channel: amqp.Channel): Promise<void> {
    
    try {
        await channel.assertQueue(name);
        await channel.sendToQueue(name, Buffer.from(JSON.stringify(message)));
        console.log('El mensaje se envio a la cola', message);
    } catch (error) {
        console.log('Hubo un error al enviar el mensaje a la cola', error);
        throw error;
    }
}