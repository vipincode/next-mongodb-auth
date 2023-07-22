# Docs

## Page function

```jsx
export default function Register() {
  return (
    <div>
      <h1>Register</h1>
    </div>
  );
}
```

## Static Rendering

- This is client components
- `use client` must add to create client component.

## Dynamic Rendering

- This is Server components [this is default in next.js]
- Means all component in next.js be default server component
- When use: when you want `get` and `display` data

## Ex:

### Server component

- Look here in home page we are display data[may be logged in user data] that comes from server so this should be a `server component`
- why this should server component bcs we getting data from the server
- Nw take a look into `profile page` here we also getting something from server[may be id or slug] so this should be a `server component`

### Client component

- Now look into `register page` here no data coming from server,
- Here we are sending data to the server, so this should be a `client component`
- Also in the loin page we are sending something to the server, so this also should be a `client component`

## Good approach play with data

- Fetch data from these server side
- make interaction client side pass data as props as
- make always parent component as server and child as client component

## Form Submition

- `https://bobbyhadz.com/blog/typescript-react-onsubmit-event-type`
- `https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/`

## API Route

- Creating a route when someone go over register or login they will not seen th other route

```jsx
<html lang='en'>
  <body className={inter.className}>
    <LayoutProvider>
      <main>{children}</main>
    </LayoutProvider>
  </body>
</html>
```

## Get the query params

- url `http://localhost:3000/api/users/me?user=vipin`

```js
const { searchParams } = new URL(req.nextUrl);
console.log(searchParams.get('user'));
```

```js
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.nextUrl);
    console.log(searchParams.get('user'));

    return NextResponse.json({
      message: 'Request success',
      data: {
        name: 'Vipin',
        email: 'v@gmail.com',
      },
    });
  } catch (error: any) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
}

```
