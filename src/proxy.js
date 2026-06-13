import { getSessionCookie } from 'better-auth/cookies'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    // const session = await auth.api.session({
    //     headers: await headers()
    // })

    const session = getSessionCookie(request)
    
    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}


export const config = {
    matcher: ['/facilities/:path','/my-bookings','/add-facility','/manage-facilities'],
}