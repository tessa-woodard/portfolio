            <button
              type="submit"
              className={`font-bold w-fit text-lg py-2 px-4 border-2 border-black rounded-xl shadow-black shadow-[0px_4px_0px_0px_rgba(0,0,0,0)] transition-colors duration-300 ${currentMood === 'creative' ? 'gradient-bg' : ''}`}
              style={{ 
                backgroundColor: currentMood === 'creative' ? 'transparent' : 'var(--text-color)',
                color: 'black'
              }}
              onMouseOver={(e) => {
                if (currentMood !== 'creative') e.currentTarget.style.backgroundColor = 'var(--hover-color)';
              }}
              onMouseOut={(e) => {
                if (currentMood !== 'creative') e.currentTarget.style.backgroundColor = 'var(--text-color)';
              }}
            >
              <span className="pr-2">
                <span className="animate-wiggle inline-block">📧</span> Send Message
              </span>
            </button> 