# 都道府県選択状態管理 ドキュメント

## useGetSelectedPrefs.ts

### 概要

- `useGetSelectedPrefs`フックは、選択された都道府県の状態を取得します。

### 使用方法

```typescript
import { useGetSelectedPrefs } from '@/lib/hooks/useGetSelectedPrefs';

const { selectedPrefsState } = useGetSelectedPrefs();
const { selectedPrefs } = selectedPrefsState;
```

### 戻り値

- selectedPrefs: 選択された都道府県が配列で取得される

---

## selectedPrefsActions.ts

### 概要

- `selectedPrefsActions`には、都道府県の選択に関連するアクションが定義されています。
- `addPrefecture`: 都道府県を選択リストに追加するアクション
- `removePrefecture`: 都道府県を選択リストから削除するアクション

### 使用方法

```typescript
import {
  addPrefecture,
  removePrefecture,
} from '@/lib/actions/selectedPrefsActions';

switch (action.type) {
  case ADD_PREFECTURE:
    return addPrefecture(state, action.payload);
  case REMOVE_PREFECTURE:
    return removePrefecture(state, action.payload);
  default:
    return state;
}
```

---

## selectedPrefsReducer.ts

### 概要

- `selectedPrefsReducer`は、選択された都道府県の状態を管理するリデューサーです。
- `ADD_PREFECTURE`: `addPrefecture`のactionを呼び出し都道府県を選択リストに追加
- `REMOVE_PREFECTURE`: `removePrefecture`のactionを呼び出し都道府県を選択リストから削除

### 使用方法

```typescript
import { selectedPrefsReducer } from '@/lib/reducer/selectedPrefsReducer';

const [selectedPrefsState, selectedPrefsDispatch] = useReducer(
  selectedPrefsReducer,
  initialState,
);
```

---

## selectedPrefsContext.ts

### 概要

- `selectedPrefsContext`は、選択された都道府県の状態を管理するコンテキストです。

### 使用方法

```typescript
import { SelectedPrefsContext } from '@/lib/context/SelectedPrefsContext';

<SelectedPrefsContext.Provider
  value={{ selectedPrefsState, selectedPrefsDispatch }}
>
  {children}
</SelectedPrefsContext.Provider>
```

---

## SelectedPrefsProvider.tsx

### 概要

`SelectedPrefsProvider`は、選択された都道府県の状態を提供するプロバイダーです。

### 使用方法

```typescript
import { SelectedPrefsProvider } from '@/lib/context/SelectedPrefsProvider';

<SelectedPrefsProvider>
  {children}
</SelectedPrefsProvider>
```
