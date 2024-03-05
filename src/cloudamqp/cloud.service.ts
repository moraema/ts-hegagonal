import * as amqp from 'amqplib';

export async function connectToRabbitMQ(): Promise<amqp.Channel> {
    const cloudAMQPUrl = 'amqp://3.229.81.220';

    try {
        const connection = await amqp.connect(cloudAMQPUrl);
        const channel = await connection.createChannel();
        console.log('La conexión a CloudAMQP fue exitosa.');
        return channel;
    } catch (error) {
        console.error('Error de conexión a CloudAMQP:', error);
        throw error;
    }
}
