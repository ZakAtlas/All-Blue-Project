const api = async <T>(url: string): Promise<T> => {
      const req = await fetch(url)

      if (!req.ok){
          throw new Error(req.statusText)
      }

      const data = req.json() as Promise<T>

      return data
}

export default api