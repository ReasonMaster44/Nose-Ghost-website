# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy files
COPY requirements.txt .
COPY app.py .
COPY get_gigs.py .
COPY templates ./templates
COPY static ./static
COPY data ./data
COPY sitemap.xml .
COPY llms.txt .
COPY Procfile .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port Fly uses
EXPOSE 8080

# Run gunicorn
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:8080"]