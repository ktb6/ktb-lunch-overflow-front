const DB_NAME = "PreferDB";
const STORE_NAME = "preferences";
const DB_VERSION = 1;

export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      reject(`IndexedDB Error: ${request.error}`);
    };
  });
};

export const setItem = async (key: string, value: any) => {
  try {
    const db = await openDB();
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    const request = store.put(value, key);

    return new Promise<void>((resolve, reject) => {
      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };

      transaction.oncomplete = () => {};

      transaction.onerror = () => {
        reject(transaction.error);
      };
    });
  } catch (error) {
    console.error("Error opening IndexedDB:", error);
  }
};

export const getItem = async (key: string) => {
  try {
    // 1. 데이터베이스 열기
    const db = await openDB();

    // 2. 트랜잭션 시작 (읽기 전용)
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);

    // 3. 특정 키로 데이터를 가져오는 요청 시작
    const request = store.get(key);

    // 4. 결과를 반환하는 프로미스
    return new Promise<any>((resolve, reject) => {
      // 4.1. 요청이 성공했을 때
      request.onsuccess = () => {
        resolve(request.result); // 가져온 데이터 반환
      };

      // 4.2. 요청이 실패했을 때
      request.onerror = () => {
        console.error(
          `Error retrieving data from IndexedDB with key: ${key}`,
          request.error
        );
        reject(request.error); // 오류 반환
      };

      // 5. 트랜잭션 완료 시
      transaction.oncomplete = () => {};

      // 6. 트랜잭션 오류 발생 시
      transaction.onerror = () => {
        console.error(
          "Transaction error during data retrieval:",
          transaction.error
        );
        reject(transaction.error); // 트랜잭션 오류 반환
      };
    });
  } catch (error) {
    // 7. 데이터베이스 열기 실패 시
    console.error("Error opening IndexedDB:", error);
    throw error; // 오류 다시 던지기
  }
};
