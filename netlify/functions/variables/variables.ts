import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const handler: Handler = async ( event: HandlerEvent, context: HandlerContext ) => {
    const myImportantVariable = process.env.MY_IMPORTANTE_VARIABLE;

    if( !myImportantVariable ) {
        throw new Error('Missing MY_IMPORTANTE_VARIABLE')
    }

    console.log('Hola mundo desde los logs')

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hola mundo',
            myImportantVariable
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
};

export { handler };
