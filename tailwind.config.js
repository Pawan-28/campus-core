module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(30px) scale(1.05)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.08)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-20deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-20deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(15px) scale(1.08)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        float4: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(10px) scale(1.03)' },
        },
      },
      animation: {
        blob1: 'blob1 8s ease-in-out infinite',
        blob2: 'blob2 10s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s cubic-bezier(0.39, 0.575, 0.565, 1) both',
        float: 'float 4s ease-in-out infinite',
        float2: 'float2 5s ease-in-out infinite',
        float3: 'float3 6s ease-in-out infinite',
        float4: 'float4 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
