describe('Static HTML Structure', () => {
    beforeEach(() => {
        document.body.innerHTML= `
            <header>
                <h1 id="site-title">Welcome</h1>
            </header>
        `
    })  

    test('contains the correct main headding', () => {
        const heading = document.getElementById('sit-title');
        expect(heading).not.toBeNull();
        expect(heading.textContent).toBe('Welcome');
    })
})