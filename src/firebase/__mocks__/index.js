/**
 * error messages in this mock class are mocking firebase database errors
 */

import { user0FromDb } from './../../__tests_constants__';

const usersRefFuncs = key => ({
    once: eventType =>
        new Promise((resolve, reject) => {
            switch (eventType) {
                case 'value': {
                    if (key === 'id0id0id0id0id0id0id0id0id0+') {
                        const snapshot = ({
                            val: () => user0FromDb,
                            exists: () => true,
                        });
                        resolve(snapshot);
                    } else if (key === 'idnotfoundidnotfound----++++') {
                        const snapshot = ({
                            exists: () => false,
                        });
                        resolve(snapshot);
                    } else {
                        const error = new Error('get user has failed on firebase database');
                        reject(error);
                    }
                    break;
                }

                default: {
                    const error = new Error(`${eventType} is not a supported eventType by once method`);
                    reject(error);
                }
            }
        }),
    set: value =>
        new Promise((resolve, reject) => {
            if (value.id === 'id0id0id0id0id0id0id0id0id0+') {
                resolve();
            } else {
                const error = new Error('set user has failed on firebase database');
                reject(error);
            }
        }),
    update: values =>
        new Promise((resolve, reject) => {
            if (values.id === 'id0id0id0id0id0id0id0id0id0+' && values.name !== 'name0') {
                resolve();
            } else {
                const error = new Error('update user has failed on firebase database');
                reject(error);
            }
        }),
});

const competitionsRefFunc = key => ({
    set: model =>
        new Promise((resolve, reject) => {
            if (model.id) {
                const snapshot = ({
                    val: () => undefined,
                });
                resolve(snapshot);
            } else {
                const error = new Error('set competition has failed on firebase database');
                reject(error);
            }
        }),
});

export const firebaseApp = {
    database: () => ({
        ref: (path) => {
            if (path.startsWith('/users')) {
                const key = path.substring(7);
                return usersRefFuncs(key);
            } else if (path.startsWith('/competitions')) {
                const key = path.substring(14);
                return competitionsRefFunc(key);
            }

            return undefined;
        },
    }),
};

const firebase = {};

export default firebase;
