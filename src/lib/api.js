const FIREBASE_DOMAIN = 'https://new-react-http-bdae2-default-rtdb.firebaseio.com';

export async function addQuote(quoteData) {
  try {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
      method: 'POST',
      body: JSON.stringify(quoteData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Could not create quote.');
    }
    
    return null;

  } catch (error) {
    console.log(error)
  }
}

export async function getSingleQuote(quoteId) {
  try {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch quote.');
    }
  
    const loadedQuote = {
      id: quoteId,
      ...data,
    };
  
    return loadedQuote;

  } catch (error) {
    console.log(error)
  }
}

export async function getAllQuotes() {
  try {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch quotes.');
    }
  
    const transformedQuotes = [];
  
    for (const key in data) {
      const quoteObj = {
        id: key,
        ...data[key],
      };
  
      transformedQuotes.push(quoteObj);
    }
    return transformedQuotes;

  } catch (err) {
    console.log(err)
  }
}

export async function addComment(commentData, quoteId) {
  try {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not add comment.');
    }
  
    return { commentId: data.name };
    
  } catch (error) {
    console.log(error)
  }
}

export async function getAllComments(quoteId) {
  try {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not get comments.');
    }
  
    const transformedComments = [];
  
    for (const key in data) {
      const commentObj = {
        id: key,
        ...data[key],
      };
  
      transformedComments.push(commentObj);
    }
  
    return transformedComments;
    
  } catch (error) {
    console.log(error)
  }
}