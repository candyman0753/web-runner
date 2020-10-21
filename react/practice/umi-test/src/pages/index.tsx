import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './index.less';
import { Button } from 'antd';

function useAge() {
  const [age, setAge] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAge(18);
    }, 2000);
  });
  return age;
}

export default function() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('update>>', count);
  });

  useEffect(() => {
    console.log('update one');
  }, []);

  const age = useAge();
  return (
    <div>
      <h1 className={styles.title}>{count}</h1>
      <Button onClick={() => setCount(count + 1)}>按钮</Button>
      <p>{age}</p>
    </div>
  );
}
