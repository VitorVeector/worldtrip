import Prismic from '@prismicio/client'
import { DefaultClient } from '@prismicio/client/types/client'

export const getPrismicClient = (req?: unknown):DefaultClient => {
    const prismic = Prismic.client(
        'https://worldtripveector.prismic.io/api/v2',
         {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return prismic
}