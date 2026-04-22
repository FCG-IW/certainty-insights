import { Handler } from '@netlify/functions';

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, '');
}

function getWordPressApiBase(): string {
  const base = process.env.WORDPRESS_URL || process.env.VITE_WORDPRESS_URL || process.env.VITE_WP_API_BASE || '';
  return base ? stripTrailingSlash(base) : '';
}

const handler: Handler = async (event) => {
  const apiBase = getWordPressApiBase();

  if (!apiBase) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'WordPress API base is not configured.' })
    };
  }

  const action = event.queryStringParameters?.action;

  try {
    if (event.httpMethod === 'GET' && action === 'page') {
      const slug = event.queryStringParameters?.slug?.trim();

      if (!slug) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Missing page slug' })
        };
      }

      const response = await fetch(
        `${apiBase}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_fields=id,slug,acf`,
        {
          headers: {
            Accept: 'application/json'
          }
        }
      );

      const bodyText = await response.text();

      return {
        statusCode: response.status,
        headers: {
          'Content-Type': response.headers.get('content-type') || 'application/json'
        },
        body: bodyText
      };
    }

    if (event.httpMethod === 'POST' && action === 'lead') {
      const payload = event.body || '{}';

      const response = await fetch(`${apiBase}/wp-json/fcg/v1/leads`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: payload
      });

      const bodyText = await response.text();

      return {
        statusCode: response.status,
        headers: {
          'Content-Type': response.headers.get('content-type') || 'application/json'
        },
        body: bodyText
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method/action not allowed' })
    };
  } catch (error) {
    return {
      statusCode: 502,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : 'Proxy request failed'
      })
    };
  }
};

export { handler };
